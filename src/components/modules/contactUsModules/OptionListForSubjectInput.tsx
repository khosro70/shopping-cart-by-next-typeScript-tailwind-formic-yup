const OptionListForSubjectInput: React.FC<{
  onSelect: (value: string) => void;
  options: string[];
  searchTerm: string;
}> = ({ onSelect, options, searchTerm }) => {
  const filteredOptions = options.filter((option) =>
    option.includes(searchTerm)
  );

  const handleOptionClick = (value: string) => {
    requestAnimationFrame(() => {
      onSelect(value);
    });
  };

  return (
    <div className="flex flex-col absolute z-10 w-full max-h-32 overflow-auto top-12 gap-y-2 border-2 border-slate-200 bg-white p-2">
      {filteredOptions.length === 0 ? (
        <div>موردی یافت نشد</div>
      ) : (
        filteredOptions.map((option, index) => (
          <div key={index} onMouseDown={() => handleOptionClick(option)}>
            {option}
          </div>
        ))
      )}
    </div>
  );
};

export default OptionListForSubjectInput