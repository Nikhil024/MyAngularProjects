import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['chris', 'anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    });
    /*this.signupForm.valueChanges.subscribe( (value) => {
      console.log(value);
    });*/
    this.signupForm.statusChanges.subscribe( (value) => {
      console.log(value);
    });
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'nikhil.iy@gmail.com'
      },
      'gender': 'male',
      'hobbies': ['Cooking']
    });
    this.signupForm.patchValue({
      'userData': {
        'username': 'Dude'
      }
    });
    this.signupForm.reset();
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    } else {
      return null;
    }
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      if (control.value === 'test@test.com') {
        resolve({'emailIsForbidden': true});
      } else {
        return null;
      }
    });
    return promise;
  }
}


