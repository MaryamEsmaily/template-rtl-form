import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import tableData from "constant/tableData";
import { useFormik } from "formik";
import { useState } from "react";

const initialValues = (selectedDataForEdit) => ({
  name: selectedDataForEdit?.name ?? "",
  lastName: selectedDataForEdit?.lastName ?? "",
  number: selectedDataForEdit?.number ?? "",
  nationalCode: selectedDataForEdit?.nationalCode ?? "",
});

function App() {
  const [data, setData] = useState(tableData);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedDataForEdit, setSelectedDataForEdit] = useState({});
  //
  const handleAdd = (values) => {
    setData((prev) => [...prev, values]);
    formik.resetForm();
  };
  const handleDelete = (nationalCode) => {
    setData(data.filter((item) => item.nationalCode !== nationalCode));
  };
  const handleUpdate = (values) => {
    setData(
      data.map((obj) => {
        if (obj.nationalCode === values.nationalCode) {
          return { ...values };
        }
        return obj;
      })
    );
    setSelectedDataForEdit({});
    setIsEditMode(false);
    formik.resetForm();
  };

  const formik = useFormik({
    onSubmit: handleAdd,
    initialValues: initialValues(selectedDataForEdit),
    enableReinitialize: true,
  });

  return (
    <div className="App">
      <Container maxW="full" px={{ lg: 5 }} mt={5}>
        <Text fontSize="2xl" fontWeight="bold">
          فرم
        </Text>
        <Box my={8} as="form" textAlign="end" onSubmit={formik.handleSubmit}>
          <Stack direction="row">
            <FormControl>
              <FormLabel>نام</FormLabel>
              <Input {...formik.getFieldProps("name")} />
            </FormControl>
            <FormControl>
              <FormLabel>نام خانوادگی</FormLabel>
              <Input {...formik.getFieldProps("lastName")} />
            </FormControl>
            <FormControl>
              <FormLabel>شماره موبایل</FormLabel>
              <Input {...formik.getFieldProps("number")} />
            </FormControl>
            <FormControl>
              <FormLabel>شماره ملی(آی دی)</FormLabel>
              <Input
                isReadOnly={isEditMode}
                {...formik.getFieldProps("nationalCode")}
              />
            </FormControl>
          </Stack>
          {!isEditMode ? (
            <Button colorScheme="blue" w="48" mt={4} type="submit">
              ثبت
            </Button>
          ) : (
            <Flex justify="end" gap={2}>
              <Button
                colorScheme="green"
                w="24"
                mt={4}
                onClick={() => handleUpdate(formik.values)}
              >
                بروزرسانی
              </Button>
              <Button
                colorScheme="red"
                w="24"
                mt={4}
                onClick={() => {
                  setSelectedDataForEdit({});
                  setIsEditMode(false);
                }}
              >
                لغو
              </Button>
            </Flex>
          )}
        </Box>
        <TableContainer>
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th textAlign="center">نام</Th>
                <Th textAlign="center">نام خانوادگی</Th>
                <Th textAlign="center">شماره موبایل</Th>
                <Th textAlign="center">شماره ملی</Th>
                <Th textAlign="center">ابزار</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((data, index) => (
                <Tr key={index}>
                  <Td textAlign="center">{data.name}</Td>
                  <Td textAlign="center">{data.lastName}</Td>
                  <Td textAlign="center">{data.number}</Td>
                  <Td textAlign="center">{data.nationalCode}</Td>
                  <Td textAlign="center">
                    <Stack direction="row" justify="center">
                      <IconButton
                        variant="unstyled"
                        onClick={() => handleDelete(data.nationalCode)}
                      >
                        <DeleteIcon fontSize={20} color="red" />
                      </IconButton>
                      <IconButton
                        variant="unstyled"
                        onClick={() => {
                          setSelectedDataForEdit(data);
                          setIsEditMode(true);
                        }}
                      >
                        <EditIcon fontSize={20} color="orange" />
                      </IconButton>
                    </Stack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default App;
