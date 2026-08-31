export function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

export function toNumber(input: FormDataEntryValue | null): number | null {
  if (!input) return null;
  const value = Number(String(input).trim());
  return Number.isFinite(value) ? value : null;
}
