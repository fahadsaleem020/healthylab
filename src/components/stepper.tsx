import { FC, PropsWithChildren } from "react";
import {
  HStack,
  Flex,
  Box,
  Button,
  BoxProps,
  FlexProps,
  IconButton,
  ButtonProps,
  IconButtonProps,
} from "@chakra-ui/react";

export const Stepper: FC<FlexProps & PropsWithChildren> = ({
  children,
  ...props
}) => {
  const defaultStyles: FlexProps = {
    alignItems: "center",
  };
  return (
    <Flex {...defaultStyles} {...props}>
      {children}
    </Flex>
  );
};

export const Step: FC<
  { children?: React.ReactElement } & ButtonProps & {
      text?: string;
    }
> = ({ children, text, ...props }) => {
  const defaultStyles: ButtonProps = {
    variant: "outline",
    colorScheme: "blue",
    rounded: "full",
  };
  return children ? (
    children
  ) : (
    <Button {...defaultStyles} {...props}>
      {text}
    </Button>
  );
};

export const Seperator: FC<BoxProps> = ({ ...props }) => {
  const defaultStyles: BoxProps = {
    h: "1",
    bg: "blue",
    flex: 1,
  };

  return <Box {...defaultStyles} {...props} />;
};
