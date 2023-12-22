import React from 'react';
import {Skeleton} from '@/components/ui/skeleton';
import {cn} from '@/lib/utils';

interface StructuresProps {
  data: any;
}

const Structures = ({data}: StructuresProps) => {
  return (
    <div className="w-full flex justify-center flex-col  gap-x-2 md:px-10">
      {!data.compound_names && (
        <div className="hidden md:flex md:flex-row gap-3 mx-10">
          <Skeleton className="w-[50%] h-[50px] rounded-lg flex items-center justify-center mx-auto" />
          <Skeleton className="w-[50%] h-[50px] rounded-lg flex items-center justify-center mx-auto" />
          <Skeleton className="w-[50%] h-[50px] rounded-lg flex items-center justify-center mx-auto" />
        </div>
      )}
      {data?.compound_names?.map((compound_name: string, index: number) => (
        <div
          key={index}
          className={cn(
            'w-full   p-2 ',
            data.compound_names.length <= 1 ? 'md:w-[100%]' : 'md:w-[50%]',
          )}>
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
