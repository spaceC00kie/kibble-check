interface Props {}

export const Donate: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-3xl">Donate</p>
      <p className="border-b text-sm">
        This webservice is provided entirely free of charge. If you find it
        useful, please consider donating to support the creators by sending
        funds to this bitcoin address.
      </p>
      <div className="flex gap-2">
        <img
          src="./src/assets/bitcoinAddress.png"
          alt="Creator's crypto wallet address as a QR code"
        />
        <p
          className="grid place-content-center font-bold"
          aria-label="crypto wallet address"
        >
          bc1q22ydn8wg8rv7f9e82dmpsfq5zsw9jlxah0rg7q
        </p>
      </div>
    </div>
  )
}
