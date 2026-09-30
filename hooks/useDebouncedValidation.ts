"use client";

import { useEffect } from "react";
import type { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";

// Validates a field shortly after the user stops typing in it, so errors
// show inline without flashing on every keystroke
export function useDebouncedValidation<T extends FieldValues>(
  form: UseFormReturn<T>,
  delay = 500,
) {
  useEffect(() => {
    const timers = new Map<FieldPath<T>, ReturnType<typeof setTimeout>>();

    const subscription = form.watch((_, { name, type }) => {
      if (!name || type !== "change") return;

      clearTimeout(timers.get(name));
      timers.set(
        name,
        setTimeout(() => form.trigger(name), delay),
      );
    });

    return () => {
      subscription.unsubscribe();
      timers.forEach(clearTimeout);
    };
  }, [form, delay]);
}
