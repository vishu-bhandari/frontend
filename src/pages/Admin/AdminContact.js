import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";
import { Table, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";

function AdminContact() {
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    
    const fetchContacts = async () => {
      try {
        dispatch(ShowLoading());
        const response = await axios.get(`${BASE_URL}/api/portfolio/get-contacts`);
        setContacts(response.data.data);
        dispatch(HideLoading());
      } catch (error) {
        dispatch(HideLoading());
        message.error(error.message);
      }
    };

    fetchContacts();
  }, [dispatch]);

  return (
    <div>
      <h2>Submitted Contacts</h2>
      <Table hoverable className="shadow-md">
        <TableHead>
          <TableHeadCell>First Name</TableHeadCell>
          <TableHeadCell>Last Name</TableHeadCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableHeadCell>Occupation</TableHeadCell>
          <TableHeadCell>Phone</TableHeadCell>
          <TableHeadCell>Message</TableHeadCell>
        </TableHead>
        <Table.Body className="divide-y">
          {contacts.map((contact) => (
            <TableRow key={contact._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell>{contact.firstname}</TableCell>
              <TableCell>{contact.lastname}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.occupation}</TableCell>
              <TableCell>{contact.phoneNumber}</TableCell>
              <TableCell className="overflow-hidden overflow-ellipsis whitespace-nowrap" title={contact.message}>
                {contact.message}
              </TableCell>
            </TableRow>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default AdminContact;
