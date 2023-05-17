#include <Python.h>
#include <stdio.h>

/**
 * print_python_list - Prints information about a Python list object
 * @p: PyObject pointer to the Python list
 */
void print_python_list(PyObject *p)
{
	Py_ssize_t size, i;
	PyObject *item;
	PyObject *item_type;

	printf("[*] Python list info\n");

	if (!PyList_Check(p))
	{
		printf("  [ERROR] Invalid Python List\n");
		return;
	}

	size = PyList_Size(p);

	printf("[*] Size of the Python List = %ld\n", size);
	printf("[*] Allocated = %ld\n", ((PyListObject *)p)->allocated);

	for (i = 0; i < size; i++)
	{
		item = PyList_GetItem(p, i);
		item_type = Py_TYPE(item);
		printf("Element %ld: %s\n", i, item_type->tp_name);
		if (PyBytes_Check(item))
			print_python_bytes(item);
	}
}

/**
 * print_python_bytes - Prints information about a Python bytes object
 * @p: PyObject pointer to the Python bytes object
 */
void print_python_bytes(PyObject *p)
{
	Py_ssize_t size, i;
	unsigned char *buffer;
	PyBytesObject *bytes = (PyBytesObject *)p;

	printf("[.] bytes object info\n");

	if (!PyBytes_Check(p))
	{
		printf("  [ERROR] Invalid Bytes Object\n");
		return;
	}

	size = bytes->ob_base.ob_size;

	printf("  size: %ld\n", size);
	printf("  trying string: %s\n", bytes->ob_sval);
	printf("  first %ld bytes:", (size + 1 > 10) ? 10 : size + 1);

	buffer = (unsigned char *)bytes->ob_sval;

	for (i = 0; i < size + 1 && i < 10; i++)
		printf(" %02x", buffer[i]);

	printf("\n");
}
