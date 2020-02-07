// For a best approach to fix the header height
// https://css-tricks.com/hash-tag-links-padding/
import * as util from 'util';

// for karma test
require('util.promisify').shim();

interface IOptions {
  errorClass?: string;
  formClass?: string;
  invalidClass?: string;
  defaultMessage?: string;
}

class Validator {
  errorClass: string;
  formClass: string;
  invalidClass: string;
  defaultMessage: string;
  form: HTMLElement | null;

  constructor({ formClass, errorClass, invalidClass, defaultMessage }: IOptions) {
    this.errorClass = errorClass || 'form-error';
    this.formClass = formClass || 'input-invalid';
    this.invalidClass = invalidClass || 'form.js-validate';
    this.defaultMessage = defaultMessage || 'This field is mandatory';
    this.form = document.querySelector(this.formClass);

    if (!this.form) {
      throw new Error('Form element does not exists');
    }
  }

  public validateEmail(str: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
    return re.test(String(str).toLowerCase());
  }

  private toggleInvalid(field: HTMLInputElement, show: boolean) {
    const id = `${field.getAttribute('name')}_error`;
    const errElement = document.getElementById(id);

    if (show) {
      field.classList.add(this.invalidClass);
      field.setAttribute('aria-describedby', id);
      field.setAttribute('aria-invalid', 'true');
    } else {
      field.classList.remove(this.invalidClass);
      field.removeAttribute('aria-describedby');
      field.removeAttribute('aria-invalid');
      if (errElement) errElement.remove();
    }
  }

  private setError(field: HTMLInputElement, message: string | undefined) {
    const id = `${field.getAttribute('name')}_error`;
    const errElement = document.getElementById(id);

    if (errElement) errElement.remove();

    const err = document.createElement('span');
    err.className = this.errorClass;
    err.id = id;
    err.textContent = message || this.defaultMessage;

    if (field.parentNode) field.parentNode.appendChild(err);
    this.toggleInvalid(field, true);
  }

  private validateField(field: HTMLInputElement) {
    const message = field.dataset.msgRequired;
    const emailMessage = field.dataset.msgEmail;

    if (field.value === '') {
      this.setError(field, message);
      return false;
    } else if (emailMessage && !this.validateEmail(field.value)) {
      this.setError(field, emailMessage);
      return false;
    }

    this.toggleInvalid(field, false);
    return true;
  }

  public validate() {
    if (this.form) {
      const requiredFields = this.form.querySelectorAll('[required]');

      this.form.addEventListener('submit', function(event) {
        requiredFields.forEach(function(field: HTMLInputElement) {
          if (!this.validateField(field)) event.preventDefault();
        });

        const invalidFields = this.form.querySelectorAll(`.${this.invalidClass}`);
        if (invalidFields.length > 0) {
          invalidFields[0].focus();
        }
      });

      requiredFields.forEach(function(field: HTMLInputElement) {
        field.addEventListener('keyup', () => {
          this.validateField(field);
        });
      });
    }
  }
}

export default util.promisify(Validator);
