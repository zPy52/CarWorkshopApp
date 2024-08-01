import TextInputPageComponent from "../../components/onboarding/TextInputPage";
import { useTheme } from "../../hooks/theme";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

export default function AskForPhone({}: Props) {
  const { theme } = useTheme();

  return (
    <TextInputPageComponent
      title="Teléfono"
      description="Le enviaremos un SMS para confirmar su identidad. Con solo eso, habrá creado su cuenta."
      placeholder="638 06 42 14"
      leftIcon={
        <Ionicons name="call" size={24} color={theme.colors.onSurface} />
      }
    />
  );
}
