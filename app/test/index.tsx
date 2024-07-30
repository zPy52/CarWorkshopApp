import { View } from "react-native";
import TextInputPageComponent from "../../components/onboarding/TextInputPage";

type Props = {

}

export default function AskForPhone({}: Props) {
  return (
    <TextInputPageComponent
      title="Verga"
      description="Vrgada"
      placeholder="638 06 42 14"
    />
  )
}