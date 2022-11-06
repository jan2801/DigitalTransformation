package handlers

import (
	"encoding/json"
	"fmt"
	"html/template"
	"io"
	"net/http"

	"moshack_2022/pkg/session"
	"moshack_2022/pkg/user"

	"go.uber.org/zap"
)

const (
	errorNoUser        = "nouser"
	errorBadPass       = "badpass"
	errorRepeatedLogin = "repeatedlogin"
)

type UserRegistration struct {
	Username string `json:"login"`
	Password string `json:"password"`
}

type UserHandler struct {
	Tmpl     *template.Template
	Logger   *zap.SugaredLogger
	UserRepo user.UserRepo
	Sessions *session.SessionsManager
}

func (h *UserHandler) CreateUser(w http.ResponseWriter, r *http.Request) {
	err := h.UserRepo.AddUser(r.FormValue("login"), r.FormValue("password"), r.FormValue("role"))
	if err != nil {
		http.Redirect(w, r, "/registration?error="+errorRepeatedLogin, http.StatusFound)
		return
	}
	http.Redirect(w, r, "/", http.StatusFound)
}

func (h *UserHandler) Index(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "/login", http.StatusFound)

	// _, err := session.SessionFromContext(r.Context())
	// if err == nil {
	// 	http.Redirect(w, r, "/loadxls", http.StatusFound)
	// 	return
	// }

	// // так или как закомментированно ниже?
	// err = h.Tmpl.ExecuteTemplate(w, "login.html", nil)

	// //	err = renderer.Render(h.Tmpl, "mainpage.html", w, nil) // ?
	// if err != nil {
	// 	errString := fmt.Sprintf("Template error: %s", err)
	// 	http.Error(w, errString, http.StatusInternalServerError)
	// 	return
	// }
}

func (h *UserHandler) LoginGET(w http.ResponseWriter, r *http.Request) {
	err := h.Tmpl.ExecuteTemplate(w, "login.html", r.FormValue("error"))
	if err != nil {
		http.Error(w, "Template errror", http.StatusInternalServerError)
	}
}

func (h *UserHandler) LoginPOST(w http.ResponseWriter, r *http.Request) {
	jsonStr, err := io.ReadAll(r.Body)
	if err != nil {
		fmt.Println("err 1")
		http.Error(w, "bad request", http.StatusInternalServerError)
		return
	}
	var ur UserRegistration
	err = json.Unmarshal([]byte(jsonStr), &ur)
	if err != nil {
		fmt.Println("err 2")
		http.Error(w, "json err", http.StatusInternalServerError)
		return
	}
	u, err := h.UserRepo.Authorize(ur.Username, ur.Password)
	if err == user.ErrNoUser {
		http.Redirect(w, r, "/login?error="+errorNoUser, http.StatusFound)
		return
	}
	if err == user.ErrBadPass {
		http.Redirect(w, r, "/login?error="+errorBadPass, http.StatusFound)
		return
	}

	sess, _ := h.Sessions.Create(w, u.ID)
	h.Logger.Infof("created session for %v", sess.UserID)
	http.Redirect(w, r, "/loadxls", http.StatusFound)
}

func (h *UserHandler) Logout(w http.ResponseWriter, r *http.Request) {
	h.Sessions.DestroyCurrent(w, r)
	http.Redirect(w, r, "/", http.StatusFound)
}

func (h *UserHandler) Registration(w http.ResponseWriter, r *http.Request) {
	err := h.Tmpl.ExecuteTemplate(w, "registration.html", r.FormValue("error"))
	if err != nil {
		http.Error(w, "Template errror", http.StatusInternalServerError)
		return
	}
}

func (h *UserHandler) Register(w http.ResponseWriter, r *http.Request) {
	err := h.UserRepo.AddUser(r.FormValue("login"), r.FormValue("password"), "loch")
	if err != nil {
		http.Redirect(w, r, "/registration?error="+errorRepeatedLogin, http.StatusFound)
		return
	}

	http.Redirect(w, r, "/", http.StatusFound)
}
