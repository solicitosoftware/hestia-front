interface NamePathType {
  pathlogin: string;
  pathMain: string;
  pathCompanies: string;
  pathUsers: string;
  pathDistricts: string;
  pathProducts: string;
  pathShopping: string;
  pathApartments: string;
  pathCharacteristics: string;
  pathPayments: string;
  pathBookings: string;
}

export const namePath: NamePathType = {
  pathlogin: "/api/auth/signin",
  pathMain: "/main",
  pathCompanies: "/companies",
  pathUsers: "/users",
  pathDistricts: "/districts",
  pathProducts: "/products",
  pathShopping: "/shopping",
  pathApartments: "/apartments",
  pathCharacteristics: "/characteristics",
  pathPayments: "/payments",
  pathBookings: "/bookings",
};
