package user

import (
	"errors"

	"gorm.io/gorm"
)

var (
	ErrNoUser       = errors.New("no user found")
	ErrBadPass      = errors.New("invalid password")
	ErrRepeatedUser = errors.New("user already exists")
)

type UserMemoryRepository struct {
	db *gorm.DB
}

func NewMemoryRepo(db *gorm.DB) *UserMemoryRepository {
	return &UserMemoryRepository{
		db: db,
	}
}

func (repo *UserMemoryRepository) Authorize(login, pass string) (*user, error) {
	users := make([]user, 0)
	repo.db.Where("login = ?", login).Find(&users)
	if len(users) != 1 {
		return nil, ErrNoUser
	}

	if !checkPassword(pass, users[0].Password) {
		return nil, ErrBadPass
	}

	return &users[0], nil
}

func (repo *UserMemoryRepository) AddUser(login, password string) error {
	oldUser := make([]user, 0)
	repo.db.Where("login = ?", login).Find(&oldUser)
	if len(oldUser) != 0 {
		return ErrRepeatedUser
	}

	hashedPassword, err := generateHash(password)
	if err != nil {
		return err
	}
	newUser := user{
		Login:    login,
		Password: hashedPassword,
	}
	db := repo.db.Create(&newUser)
	if db.Error != nil {
		return db.Error
	}

	return nil
}
