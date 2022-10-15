type JestTestingProps = {
  heading: string;
}

export default function JestTesting (props: JestTestingProps) {
  return (
    <div>
      <h1>{props.heading}</h1>
    </div>
  );
}

module.exports = JestTesting