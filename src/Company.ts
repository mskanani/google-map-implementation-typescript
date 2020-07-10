import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: { // this does not initialize the location property, we have to initialize it and everything inside of it inside the construtor
    lat: number,
    lng: number
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

}