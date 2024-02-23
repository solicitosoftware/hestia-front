interface NamePathType {
  pathlogin: string;
  pathMain: string;
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
  pathMain: "/dashboard/main",
  pathDistricts: "/dashboard/districts",
  pathProducts: "/dashboard/products",
  pathShopping: "/dashboard/shopping",
  pathApartments: "/dashboard/apartments",
  pathCharacteristics: "/dashboard/characteristics",
  pathPayments: "/dashboard/payments",
  pathBookings: "/dashboard/bookings",
};
