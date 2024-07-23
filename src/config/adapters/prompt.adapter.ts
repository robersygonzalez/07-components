import prompt from "react-native-prompt-android"

interface Options {
    title: string;
    subTtitle?: string;
    buttons: PromptButton[];
    promptType?: 'default'|'plain-text' | 'secure-text';
    placeholder?: string;
    defaultValue?: string;
}

interface PromptButton{
    text: string;
    onPress: () => void;
    style?: 'cancel' | 'default' | 'destructive';
}


export const showPrompt = ({
    title,
    subTtitle,
    buttons,
    promptType = 'default',
    placeholder,
    defaultValue,
}:Options) => {

    prompt(
        title,
        subTtitle,
        buttons,
        {
          type: promptType,
          cancelable: false,
          defaultValue: defaultValue,
          placeholder: placeholder,
        },
      );
}