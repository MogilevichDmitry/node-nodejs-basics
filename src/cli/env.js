const parseEnv = () => {
  const allVariablesNames = Object.keys(process.env);

  const RSS_VARS = allVariablesNames
    .filter((name) => name.startsWith("RSS_"))
    .map((name) => `${name}=${process.env[name]}`)
    .join("; ");

  console.log(RSS_VARS);
};

parseEnv();
