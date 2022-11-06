package apartments

import (
	"errors"

	"gorm.io/gorm"
)

var (
	errNoApartment = errors.New("no apartment found")
)

type ApartmentDB struct {
	db *gorm.DB
}

func NewApartmentRepo(db *gorm.DB) *ApartmentDB {
	return &ApartmentDB{
		db: db,
	}
}

func (adb *ApartmentDB) GetUserApartmentByID(id uint32) (*UserApartment, error) {
	aparts := make([]UserApartment, 0)
	// db := adb.db.Where("id = ?", id).Find(&aparts)
	db := adb.db.Table(userApartmentsTable).Where("id = ?", id).Find(&aparts)
	if db.Error != nil {
		return nil, db.Error
	}
	if len(aparts) != 1 {
		return nil, errNoApartment
	}

	return &aparts[0], nil
}

func (adb *ApartmentDB) GetDBApartmentByID(id uint32) (*DBApartment, error) {
	aparts := make([]DBApartment, 0)
	// db := adb.db.Where("id = ?", id).Find(&aparts)
	db := adb.db.Table(dbApartmentsTable).Where("id = ?", id).Find(&aparts)
	if db.Error != nil {
		return nil, db.Error
	}
	if len(aparts) != 1 {
		return nil, errNoApartment
	}

	return &aparts[0], nil
}

func (adb *ApartmentDB) GetAllUserApartmentsByUserID(userID uint32) ([]UserApartment, error) {
	aparts := make([]UserApartment, 0)
	db := adb.db.Table(userApartmentsTable).Where("user_id = ?", userID).Find(&aparts)
	if db.Error != nil {
		return nil, db.Error
	}

	return aparts, nil
}

func (adb *ApartmentDB) AddUserApartment(apartment *UserApartment) (uint32, error) {
	result := adb.db.Table(userApartmentsTable).Create(apartment)
	if result.Error != nil {
		return 0, result.Error
	}

	return apartment.ID, nil
}

func (adb *ApartmentDB) DeleteUserApartment(id uint32) (bool, error) {
	apartment := UserApartment{}
	result := adb.db.Table(userApartmentsTable).Where("id = ?", id).Delete(&apartment)
	if result.Error != nil {
		return false, result.Error
	}

	return true, nil
}
