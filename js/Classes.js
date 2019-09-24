class Employee {
  constructor(result, index) {
    this.index = index;
    this.name = `${changeCase(result.name.first)} ${changeCase(result.name.last)}`;
    this.email = result.email;
    this.phone = result.phone;
    this.street = changeCase(result.location.street);
    this.city = changeCase(result.location.city);
    this.zipCode = result.location.postcode;
    this.nationality = result.nat.toUpperCase();
    this.dob = new Date(result.dob.date)
    this.birthday = `${this.dob.getMonth()}/${this.dob.getDate()}/${this.dob.getFullYear()}`;
    this.image = result.picture.large;
  }
  createThumbnail() {
    const thumbnail = `
      <section class="employee-card" data-index=this.index><img class="employee-img" src=${this.image}>
      <div class="card">
      <h2>${this.name}</h2>
      <p>${this.email}</p>
      <p>${this.city}</p>
      </div>
      </section>`;
    return thumbnail;
  }
  createModalDetail(currentIndex) {
    const detail = `
      <img class="employee-img" src=${this.image}>
      <div class="modal-details">
      <h2>${this.name}</h2>
      <p>${this.email}</p>
      <p>${this.city}</p>
      <hr>
      <p>${this.phone}</p>
      <p>${this.street}, ${this.nationality} ${this.zipCode}</p>
      <p>Birthday: ${this.birthday.getMonth()}/${this.birthday.getDate()}/${this.birthday.getFullYear()}</p>
      </div>
      `;
    return detail;
  }
}
