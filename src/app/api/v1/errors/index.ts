interface Props {
  message: string;
  status: number;
}

export const ErrorHandlingPrisma = (error: any): Props => {
  switch (error.code) {
    case "P2002":
      const result = error.message.match(/(unique.*)/i);
      return { message: result[0], status: 409 };
    default:
      return { message: error.message, status: 400 };
  }
};
