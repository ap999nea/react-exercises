import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { CartContext } from "../contexts/CartContext";
import { getProductPrice } from "../utils/get-product-price";

type Props = {
  submitAction: () => void;
};

type Form = {
  cardNumber: string;
  name: string;
  surname: string;
};

export const CheckoutForm = ({ submitAction }: Props) => {
  const { totalPrice } = useContext(CartContext);
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<Form>({
    mode: "onChange",
  });

  const onSubmit = (data: Form) => {
    console.log(data);
    submitAction();
  };

  return (
    <div className="flex flex-col gap-4">
      <h4>Total Price: {getProductPrice(totalPrice)}</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <Field>
            <FieldLabel htmlFor="cardNumber">Card Name*</FieldLabel>
            <Input
              id="cardNumber"
              type="text"
              placeholder="Enter your card number"
              {...register("cardNumber", {
                required: true,
                pattern: {
                  value: /^[0-9]{16}$/,
                  message: "Invalid card number",
                },
              })}
            />
          </Field>
          {errors.cardNumber && errors.cardNumber.type === "pattern" && (
            <p className="text-red-500 mt-2">{errors.cardNumber.message}</p>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Field>
              <FieldLabel htmlFor="name">Name*</FieldLabel>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: true, minLength: 3 })}
              />
            </Field>
            {errors.name && errors.name.type === "minLength" && (
              <p className="text-red-500 mt-2">
                Name must contain at least three characters
              </p>
            )}
          </div>
          <div>
            <Field>
              <FieldLabel htmlFor="surname">Surname*</FieldLabel>
              <Input
                id="surname"
                type="text"
                placeholder="Enter your surname"
                {...register("surname", { required: true, minLength: 3 })}
              />
            </Field>
            {errors.surname && errors.surname.type === "minLength" && (
              <p className="text-red-500 mt-2">
                Name must contain at least three characters
              </p>
            )}
          </div>
        </div>
        <Button type="submit" disabled={!isValid}>
          Pay now
        </Button>
      </form>
    </div>
  );
};
