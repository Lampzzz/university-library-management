const ProfileInfo = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <p className="text-light-100">{label}</p>
      <p className="text-white text-xl font-semibold">{value}</p>
    </div>
  );
};

export default ProfileInfo;
