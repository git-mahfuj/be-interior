"use client"

import { notFound } from "next/navigation";

export default function CatchAllNotFound() {
  notFound(); // এটি আপনার (client) এর ভেতরের not-found.tsx ফাইলকে জোর করে ট্রিগার করাবে
}