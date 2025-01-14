import axios from 'axios';
import React from 'react'
import { devUrl } from './global-variables';
import showErrorToast from './toasts/showErrorToast';
import { showPromiseToast } from './toasts/showPromiseToast';
import { Button } from '@/components/ui/button';

const testClick = () => {
  const response = axios.post(`${devUrl}/test-error`);
  if (!response) {
    showErrorToast({ message: "Failed to test error" });
    console.log("Failed to test error");
    return;
  }
  console.log("Response:", response);
  showPromiseToast(response, { loading: "Testing error...", success: "Error tested successfully!", error: "Error testing failed." });
}
export default function TestButton() {
  return (
    <Button onClick={() => testClick()}>
      TEST BUTTON
    </Button>
  )
}
