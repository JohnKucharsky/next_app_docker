import { type ChangeEvent, type MouseEvent, useState } from 'react'

const usePaginationAndBulkActions = ({
  idsArray,
  arrayLength
}: {
  idsArray?: number[]
  arrayLength?: number
}) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [page, setPage] = useState<number>(0)
  const [limit, setLimit] = useState<number>(20)

  const selectedBulkActions = selectedItems.length > 0
  const selectedSome =
    selectedItems.length > 0 && selectedItems.length < arrayLength
  const selectedAll = selectedItems.length === arrayLength

  const handleSelectAll = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedItems(event.target.checked ? idsArray : [])
  }

  const handleSelectOne = (
    _event: ChangeEvent<HTMLInputElement>,
    userId: number
  ): void => {
    if (!selectedItems.includes(userId)) {
      setSelectedItems((prevSelected) => [...prevSelected, userId])
    } else {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((id) => id !== userId)
      )
    }
  }

  const handlePageChange = (
    _event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ): void => {
    setPage(newPage)
  }

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value))
    setPage(0)
  }
  return {
    page,
    limit,
    handleSelectAll,
    handleSelectOne,
    handlePageChange,
    handleLimitChange,
    selectedBulkActions,
    selectedSome,
    selectedAll,
    selectedItems,
    setSelectedItems
  }
}

export default usePaginationAndBulkActions
