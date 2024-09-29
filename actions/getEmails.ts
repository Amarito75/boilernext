import { prisma } from "@/lib/prisma";

export async function getEmails(userId: string) {
  const emails = await prisma.email.findMany({
    where: {
      user: {
        userId: userId,
      },
    },
  });

  return emails;
}
