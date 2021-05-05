function validator(value) {
  return {
    value,
    isValid: true,
    isNumber() {
      if (typeof this.value === 'number') {
        return this;
      }
      this.isValid = false;
      return this;
    },
    isString() {
      if (typeof this.value === 'string') {
        return this;
      }
      this.isValid = false;
      return this;
    },
    isArray() {
      if (Array.isArray(this.value)) {
        return this;
      }
      this.isValid = false;
      return this;
    },
    isEmail() {
      if (/\S+@\S+\.\S+/.test(this.value)) {
        return this;
      }
      this.isValid = false;
      return this;
    },
    isDate() {
      if (/^\d{2}\.\d{2}\.\d{4}$/.test(this.value)) {
        return this;
      }
      this.isValid = false;
      return this;
    },
    min(min) {
      if (typeof this.value !== 'number') {
        return this;
      }
      if (this.value > min) {
        return this;
      } else {
        this.isValid = false;
        return this;
      }
    },
    max(max) {
      if (typeof this.value !== 'number') {
        return this;
      }
      if (this.value < max) {
        return this;
      } else {
        this.isValid = false;
        return this;
      }
    },
    minLenght(min) {
      if (!(typeof this.value !== 'string' || Array.isArray(this.value))) {
        return this;
      }
      if (this.value.lenght > min) {
        return this;
      } else {
        this.isValid = false;
        return this;
      }
    },
    minLenght(max) {
      if (!(typeof this.value !== 'string' || Array.isArray(this.value))) {
        return this;
      }
      if (this.value.lenght > max) {
        return this;
      } else {
        this.isValid = false;
        return this;
      }
    },
  };
}
