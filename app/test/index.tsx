import Insets from "../../constants/insets";
import { useTheme } from "../../hooks/theme";
import { Ionicons } from "@expo/vector-icons";
import TextInputPageComponent from "../../pages/shared/TextInput";
import SMSValidationPage from "../../pages/login/SMSValidation";
import CarLicenseInputPage from "../../pages/login/CarLicenseInput";

type Props = {};

export default function AskForPhone({}: Props) {
  const { theme } = useTheme();

  return <CarLicenseInputPage title="Matrícula" description="Introduzca la matrícula de su vehículo para continuar. La usaremos para recomendarle los mejores productos para su coche." />

  return <SMSValidationPage title="Validación SMS" description="Confirma tu número de teléfono con el código SMS que te enviamos" />

  return (
    <TextInputPageComponent
      title="Teléfono"
      description="Le enviaremos un SMS para confirmar su identidad. Con solo eso, habrá creado su cuenta."
      placeholder="638 06 42 14"
      leftIcon={
        <Ionicons
          name="call"
          size={Insets.icon}
          color={theme.colors.onSurface}
        />
      }
    />
  );
}
