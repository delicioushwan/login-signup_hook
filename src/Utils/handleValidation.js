import { emailRegex, phoneNumberRegex } from "./Regex";

export default ({ value, test, key }) => {
  switch (key) {
    case "maxLength": {
      if (value.length > test) {
        return `최대 ${test}자 입니다.`;
      }
      break;
    }
    case "minLength": {
      if (value.length > 0 && value.length < test) {
        return `최소 ${test}자 이상 입니다.`;
      }
      break;
    }
    case "required": {
      if (test === true && value.length < 1) {
        return `필수 입력 사항 입니다.`;
      }
      break;
    }
    case "email": {
      if (test === true && value.length > 0 && !emailRegex.test(value)) {
        return "올바른 메일주소를 입력해 주세요.";
      }
      break;
    }
    case "phoneNumber": {
      if (test && value.length > 0 && !phoneNumberRegex.test(value)) {
        return "올바른 형식의 휴대폰 번호를 입력해 주세요."
      }
      break;
    }
    case "customValidator": {
      return test(value);
    }
    default: {
      return undefined;
    }
  }
  return undefined;
};
