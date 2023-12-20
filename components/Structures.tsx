import React from 'react';
import {Skeleton} from '@/components/ui/skeleton';

interface StructuresProps {
  data: any;
}

const Structures = ({data}: StructuresProps) => {
  return (
    <div className="w-full flex justify-center flex-col md:flex-row gap-x-2 md:px-10">
      {!data.compound_names && (
        <Skeleton className="w-[70%] h-[500px] rounded-sm flex items-center justify-center mx-auto" />
      )}
      {data?.compound_names?.map((compound_name: string, index: number) => (
        <div key={index} className="w-full md:w-[50%]  p-2 ">
          <iframe
            style={{
              width: '100%',
              maxWidth: '100%',
              height: '500px',
              display: 'flex',
              margin: '0 auto',
            }}
            src={`https://pubchem.ncbi.nlm.nih.gov/compound/${compound_name}#section=3D-Conformer&embed=true`}
            allowFullScreen
            title={`Compound ${index + 1}`}></iframe>
        </div>
      ))}
    </div>
  );
};

export default Structures;
