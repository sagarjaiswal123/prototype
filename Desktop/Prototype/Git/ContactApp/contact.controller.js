(function () {
    var app = angular.module("ContactApp");
    app.controller("ContactCtrl", ContactCtrl);

    function ContactCtrl(ContactDataSvc) {
        var self = this;

        self.editMode = false;

        self.addMode = false;

        ContactDataSvc.getContacts()
            .then(function (data) {
                self.contacts = data;
            });

        this.selectContact = function (index) {
            this.selectedContact = this.contacts[index];
            this.successMessage = undefined;
            this.errorMessage = undefined;
        }

        this.toggleEditMode = function () {
            this.editMode = !this.editMode;
        }

        this.saveUser = function () {
            this.toggleEditMode();
            var userData = this.selectedContact;
            if (self.addMode) {
                self.addMode = false;
                ContactDataSvc.addUser(userData)
                    .then(function () {
                        self.successMessage = "Data successfully updated";
                    }, function () {
                        self.errorMessage = "There was an error. Please try again";
                    })
            }else {
                ContactDataSvc.saveUser(userData)
                    .then(function () {
                        self.successMessage = "Data successfully updated";
                    }, function () {
                        self.errorMessage = "There was an error. Please try again";
                    })
            }
        }

        this.addContact = function () {
            self.addMode = true;
            this.selectedContact = {
                "id": new Date().toTimeString()
            };
            this.editMode = true;

        }

    }
})();