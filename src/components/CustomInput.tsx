import { TextInput } from "react-native-paper"

interface ICustomInput {
  value: string;
  onChangeText: (text: string) => void;
}

export const CustomInput:React.FC<ICustomInput> = ({value, onChangeText}) => {
  return (
    <TextInput
      mode="outlined"
      placeholder="Type to find currency.."
      value={value}
      onChangeText={onChangeText}
      style={{marginTop: 20}}
    />
  )
}
