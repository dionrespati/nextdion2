import { getInfoUser } from "@modules";
import { useQuery } from "@tanstack/react-query";

export function useInfoUser(searchQuery: string) {
  return useQuery(["infoUser", searchQuery], () => getInfoUser(searchQuery));
}
