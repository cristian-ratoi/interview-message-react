function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getMessage(id: number): Promise<{ message: string }> {
  await wait(id * 1000);

  return { message: `Message for ${id}` };
}
