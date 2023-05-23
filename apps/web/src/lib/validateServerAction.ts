/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import type z from "zod";

declare const brand: unique symbol;

type Brand<T, TBrand extends string> = T & { [brand]: TBrand };

type ActionType<InputType extends z.ZodTypeAny, ResponseType extends any> = (
  input: z.infer<InputType>,
) => Promise<ResponseType>;

export type ValidateAction<
  InputType extends z.ZodTypeAny,
  ResponseType extends any,
> = Brand<ActionType<InputType, ResponseType>, "validate-action">;

export function validate<InputType extends z.ZodTypeAny>(
  validator?: InputType,
) {
  // This is the "factory" that is created on call of validate. You pass it a "use server" function and it will validate the input before you call it
  return function <ResponseType extends any>(
    action: ActionType<InputType, ResponseType>,
  ): ValidateAction<InputType, ResponseType> {
    // The wrapper that actually validates
    const validatedAction = async (input: z.infer<InputType>) => {
      if (validator) {
        const result = validator.safeParse(input);
        if (!result.success) throw result.error;
      }
      return await action(input);
    };

    return validatedAction as ValidateAction<InputType, ResponseType>;
  };
}
