class Log:
    def dispara_log(self, message):
        return message


class LogError:
    def __init__(self, log) -> None:
        self.log = log
        self.COLOR = "\033[91m"
        self.RESET = "\033[0m"

    def dispara_log(self, message):
        return f"{self.COLOR}{self.log.dispara_log(message)}{self.RESET}"


class LogWarning:
    def __init__(self, log) -> None:
        self.log = log
        self.COLOR = "\033[93m"
        self.RESET = "\033[0m"

    def dispara_log(self, message):
        return f"{self.COLOR}{self.log.dispara_log(message)}{self.RESET}"


class LogSuccess:
    def __init__(self, log) -> None:
        self.log = log
        self.COLOR = "\033[92m"
        self.RESET = "\033[0m"

    def dispara_log(self, message):
        return f"{self.COLOR}{self.log.dispara_log(message)}{self.RESET}"


print(LogError(Log()).dispara_log("error"))
print(LogWarning(Log()).dispara_log("warning"))
print(LogSuccess(Log()).dispara_log("success"))
