"use client";

import Form from "@components/Form";
import React, { useState } from "react";

const CreatePrompt = () => {
  const [submitting, setsubmitting] = useState(false);
  const [post, setpost] = useState({
    tag: "",
    prompt: "",
  });

  const createPrompt = async () => {};

  return (
    <div>
      <Form
        type="Create"
        post={post}
        setpost={setpost}
        submitting={submitting}
        handleSumbit={createPrompt}
      />
    </div>
  );
};

export default CreatePrompt;
