import { Msg } from "./styles";

interface ErrorMsgProps {
    msg: string;
  }
  
  export function ErrorMsg({ msg }: ErrorMsgProps) {
    return (
      <Msg className="text-xs italic font-bold text-red-500 mt-2">
        * {msg}
      </Msg>
    )
  }