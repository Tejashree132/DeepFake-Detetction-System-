'use client';

import {
  Modal,
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalContent,
} from '@nextui-org/react';
import { useContext } from 'react';

import { DeepfakeContext } from '@/helpers';

export default function InfoModal() {
  const { isOpen, onOpenChange } = useContext(DeepfakeContext);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Welcome to Deepfake Detector!
            </ModalHeader>
            <ModalBody>
              <p>
                This is a DeepFake Detector System built with Next.js, FastAPI,
                and TensorFlow.
              </p>
              <p>
                The model is trained on the OpenForensics dataset which is downloaded from kaggle. 
                It is a collection of 191,000 photos of 256x256 pixels
                of real and fake faces.so, user need to detect photos on 256x256px.
                The model is trained to detect whether a given user input image of a 
                face is real or fake.
              </p>
              <p>
                The model is trained with a Convolutional Neural Network (CNN)
                using TensorFlow and keras. This model was trained on Jupyter Notebbok 
                but You can use Google colab for this ,and
                downloaded to the FastAPI server, and then used to make
                predictions. The model is 87.2% accurate on the test set.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                color="warning"
                onPress={onClose}
              >
                Got It!
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
