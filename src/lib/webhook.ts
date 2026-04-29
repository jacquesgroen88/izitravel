const WEBHOOK_URL = 'https://hook.eu2.make.com/5it7lfymupsatg8sht6wg536bj35v6jy';

export async function submitToWebhook(data: Record<string, string>): Promise<void> {
  const res = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Submission failed');
}
