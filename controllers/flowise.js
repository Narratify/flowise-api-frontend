export const createPrediction = async (req, res) => {
  const { message } = req.body;
  console.log(message);

  try {
    // Call the Flowise API endpoint here..
    const flowiseData = {
      question: message,
    };

    const response = await fetch(
      `https://flowise-s3z3.onrender.com/api/v1/prediction/71ff7ad7-e3e8-43d6-ae13-703ffe863488`, // バックティックとカンマを追加
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer kg2F4Klp254pbNoH52EmQz1Sd3vSnkGvqUV7FgdhprY=` // バックティックを使用
        },
        body: JSON.stringify(flowiseData),
      }
    );

    const data = await response.json(); // 変数名を修正
    console.log(data);
    
    res.status(200).json({ message: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
