import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";


export default function AppUserList() {
  return (
    <Card className="w-[350px]">
      <img
        src="assets/prodil.jpg"
        alt="Admin"
        className="w-full h-32 object-cover rounded-t-lg cursor-pointer"
      />
      <CardContent className="p-3">
        <div className="flex justify-between items-center">
          <div className="space-x-2">
            <Button variant="link" className="text-blue-600 hover:text-blue-800 p-0">
              <i className="ri-edit-line text-xl" />
            </Button>
            <Button variant="link" className="text-blue-600 hover:text-blue-800 p-0">
              <i className="ri-eye-line text-xl" />
            </Button>
          </div>
          <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            Maharashtra
          </span>
        </div>
        <CardTitle className="text-base font-semibold text-gray-800 mt-2">
          Admin
        </CardTitle>
        <p className="text-sm text-gray-500 mt-1">admin1@gmail.com</p>
      </CardContent>
    </Card>
  );
}
