import Insets from "../../constants/insets";
import { useTheme } from "../../hooks/theme";
import { Ionicons } from "@expo/vector-icons";
import TextInputPageComponent from "../../pages/shared/TextInput";
import SMSValidationPage from "../../pages/login/SMSValidation";

type Props = {};

export default function AskForPhone({}: Props) {
  const { theme } = useTheme();

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
