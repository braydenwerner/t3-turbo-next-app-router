/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
"use client";

import { useMemo, useRef, useState } from "react";
import { type ZodIssue, type z } from "zod";

import type { ValidateAction } from "~/lib/validateServerAction";

export function useValidatedAction<
  InputType extends z.ZodTypeAny,
  ResponseType extends any,
>(action: ValidateAction<InputType, ResponseType>) {
  const doAction = useRef(action);

  const [data, setData] = useState<ResponseType | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState<Partial<ZodIssue> | null>(null);

  const mutate = useMemo(
    () => async (input: z.infer<InputType>) => {
      setIsLoading(true);
      setErr(null);
      setData(null);
      setSuccess(false);
      try {
        const result = await doAction.current(input);
        setData(result);
        setIsLoading(false);
        setSuccess(true);
      } catch (e) {
        const error = (
          JSON.parse((e as Error).message) as Partial<ZodIssue[]>
        )[0];
        if (error) setErr(error);
        setIsLoading(false);
      }
    },
    [],
  );

  return {
    mutate,
    data,
    success,
    isLoading,
    error: err,
  };
}
