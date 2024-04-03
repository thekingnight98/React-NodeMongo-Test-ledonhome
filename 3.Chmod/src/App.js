export default function App() {
  return (
    <div className="App">
      <Chmod permission={"rwxrwxr-x"} answer={"775"} />
      <Chmod permission={"-r-w------"} answer={"600"} />
      <Chmod permission={"r-wr----r"} answer={"644"} />
      <Chmod permission={"-rwxrwxr-x"} answer={"775"} />
      <Chmod permission={"-r-x---r-x"} answer={"505"} />
      <Chmod permission={"-rw-rw-rw-"} answer={"666"} />
      <Chmod permission={"-r--r--r--"} answer={"444"} />
      <Chmod permission={"---x--x--x"} answer={"111"} />
      <Chmod permission={"-rw-------"} answer={"600"} />
      <Chmod permission={"-rw-rw-r--"} answer={"644"} />
    </div>
  );
}

const Chmod = (props) => {
  const { permission, answer } = props;
  // ยังไมถูก
  function convert(input) {
    const valueMap = { "-": 0, r: 4, w: 2, x: 1 };

    const result = input
      .match(/.{1,3}/g)
      .map((group) =>
        group.split("").reduce((sum, char) => sum + valueMap[char], 0)
      )
      .join("");

    return `${result} is ${answer === result ? "true" : "false"}`;
  }

  return (
    <>
      <p>
        {`[ ${permission} ] =  `}
        {convert(permission)}
      </p>
    </>
  );
};
