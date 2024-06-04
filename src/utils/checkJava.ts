export default async function checkJava() {
  try {
    const response = await fetch("/api/java", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: "check" }),
    });
    console.log(response);

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error("자바 클래스를 확인할 수 없습니다.");
  }
}
