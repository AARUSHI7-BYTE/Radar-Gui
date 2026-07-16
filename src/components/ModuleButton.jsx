function ModuleButton({
  title,
  active = true,
  width = "w-40",
  height = "h-12",
  className = "",
}) {
  return (
    <button
      className={`
        ${width}
        ${height}
        rounded-md
        font-semibold
        text-white
        transition
        duration-200
        ${
          active
            ? "bg-slate-800 hover:bg-slate-700"
            : "bg-gray-300 text-black hover:bg-gray-400"
        }
        ${className}
      `}
    >
      {title}
    </button>
  );
}

export default ModuleButton;