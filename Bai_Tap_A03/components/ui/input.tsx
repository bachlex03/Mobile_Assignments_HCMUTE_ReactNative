import * as React from "react";
import { TextInput, View, type TextInputProps, Text } from "react-native";
import { cn } from "~/lib/utils";
import { Control, Controller, FieldValues, FieldError } from "react-hook-form";

interface InputProps extends TextInputProps {
  name: string;
  control: Control<any>;
  error?: FieldError;
}
const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  (
    { name, control, error, className, placeholderClassName, ...props },
    ref
  ) => {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <View>
              <TextInput
                ref={ref}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                className={cn(
                  "web:flex h-10 native:h-12 web:w-full rounded-md border border-input bg-background px-3 web:py-2 text-base lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
                  props.editable === false &&
                    "opacity-50 web:cursor-not-allowed",
                  className
                )}
                placeholderClassName={cn(
                  "text-muted-foreground",
                  placeholderClassName
                )}
                {...props}
              />
              {error && <Text className="text-red-500">{error.message}</Text>}
            </View>
          );
        }}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
