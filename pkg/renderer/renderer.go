package renderer

import (
	"errors"
	"fmt"
	"html/template"
	"io"
	// "os"
)

func Render(tmpls *template.Template, tmplName string, w io.Writer, data interface{}) error {
	var err error
	layout := tmpls.Lookup("layout.html")
	if layout == nil {
		return errors.New("no layout template")
	}

	layout, err = layout.Clone()
	if err != nil {
		return err
	}

	t := tmpls.Lookup(tmplName)
	if t == nil {
		return fmt.Errorf("template not found: %s", tmplName)
	}

	tmpl, err := layout.AddParseTree("", t.Tree)
	if err != nil {
		return err
	}

	return tmpl.ExecuteTemplate(w, "layout.html", data)
	//return tmpl.ExecuteTemplate(os.Stdout, "layout.html", data) // for testing
}
