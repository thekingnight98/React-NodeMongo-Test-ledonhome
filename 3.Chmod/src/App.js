import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <Chmod permission={"rwxrwxr-x"} /> {/*775*/}
      <Chmod permission={"-r-w------"} /> {/*600*/}
      <Chmod permission={"r-wr----r"} /> {/*644*/}
      <Chmod permission={"-rwxrwxr-x"} /> {/*775*/}
      <Chmod permission={"-r-x---r-x"} /> {/*505*/}
      <Chmod permission={"-rw-rw-rw-"} /> {/*666*/}
      <Chmod permission={"-r--r--r--"} /> {/*444*/}
      <Chmod permission={"---x--x--x"} /> {/*111*/}
      <Chmod permission={"-rw-------"} /> {/*600*/}
      <Chmod permission={"-rw-rw-r--"} /> {/*644*/}
    </div>
  );
}

const Chmod = (props) => {
  const { permission } = props;
  function convert(input) {
    // code here.
    const result = "";
    return result;
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
