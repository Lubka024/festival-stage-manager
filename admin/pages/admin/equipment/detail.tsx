import * as React from 'react'
import { Box, DetailScope, DisplayTextField, LinkButton, Stack } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Equipment detail
			</SlotSources.Title>
			<DetailScope entity="Equipment(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/equipment/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Equipment
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/equipment/edit(id: $entity.id)">
						Edit equipment
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="quantity" label="Quantity" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="stage.name" label="Stage" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="performance.name" label="Performance" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
